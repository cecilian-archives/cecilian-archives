import type { NextPage } from "next";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import ButtonLink from "src/components/ButtonLink";
import { TextField, TextArea, NumberField } from "src/components/formFields";
import StarDivider from "src/components/StarDivider";
import { trpc } from "src/utils/trpc";
import { getTotalCost, numberiseInputs } from "src/server/checkout/eventHelpers";

const Tickets70th: NextPage = () => {
  const { data: session, status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setValue,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      ceilidhQty: "1",
      concertQty: "1",
      dinnerQty: "1",
      donationValue: "0",
    },
  });

  const upsertOrder = trpc.salesOrders.upsertUserOrder.useMutation();

  const onSubmit = (data: any) => {
    console.log(data);
    const orderDetails = {
      ...data,
      ...numberiseInputs({
        ceilidhQtyVal: data.ceilidhQty,
        concertQtyVal: data.concertQty,
        dinnerQtyVal: data.dinnerQty,
        donationVal: data.donationValue,
      }),
    };
    upsertOrder.mutate({ orderDetails });
  };

  const [ceilidhQtyVal, concertQtyVal, dinnerQtyVal, donationVal] = watch([
    "ceilidhQty",
    "concertQty",
    "dinnerQty",
    "donationValue",
  ]);
  const { ceilidhQty, concertQty, dinnerQty, donationValue } = numberiseInputs({
    ceilidhQtyVal,
    concertQtyVal,
    dinnerQtyVal,
    donationVal,
  });
  const dinnerNameIndices = Array.from({ length: dinnerQty }, (_, idx) => idx);

  return status === "loading" ? null : (
    <div className="flex w-screen min-h-screen">
      <main className="flex flex-1 flex-col justify-start w-full min-h-screen bg-archiveBlue-50 py-20 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 border-b-8 border-archiveYellow-500">
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-prose mx-auto">
          <img
            src="/images/logo.svg"
            alt=""
            className="w-12 max-h-12 border border-archiveBlue-700 rounded-xl"
          />
          <h2 className="mt-6 mb-4 text-3xl tracking-tight text-black">Tickets</h2>
          <fieldset className="w-full max-w-prose mx-0 my-2 flex flex-col justify-center items-start gap-6">
            <legend className="text-2xl font-title pb-4 md:pb-0">Events</legend>
            <NumberField
              title={
                <h4 className="text-xl">
                  Ceilidh <span className="text-sm text-gray-500">(£15)</span>
                </h4>
              }
              description={<p>Some description of the event goes here.</p>}
              name="ceilidhQty"
              label="Quantity"
              register={register}
              options={{
                required: "Please enter a quantity",
                min: { value: 0, message: "Please enter a positive number" },
              }}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
            />
            <NumberField
              title={
                <h4 className="text-xl">
                  Concert <span className="text-sm text-gray-500">(£12)</span>
                </h4>
              }
              description={<p>Being in and/or watching</p>}
              name="concertQty"
              label="Quantity"
              register={register}
              options={{
                required: "Please enter a quantity",
                min: { value: 0, message: "Please enter a positive number" },
              }}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
            />
            <NumberField
              title={
                <h4 className="text-xl">
                  Dinner <span className="text-sm text-gray-500">(£40)</span>
                </h4>
              }
              description={<p>Needs names too</p>}
              name="dinnerQty"
              label="Quantity"
              register={register}
              options={{
                required: "Please enter a quantity",
                min: { value: 0, message: "Please enter a positive number" },
              }}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
            />
          </fieldset>
          <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />
          <div className="w-full flex flex-row justify-between items-center">
            <h3 className="text-xl mt-2">Total Ticket Cost</h3>
            <p className="text-xl font-title mt-2 font-bold">
              £{getTotalCost({ ceilidhQty, concertQty, dinnerQty }) / 100}
            </p>
          </div>
          <p className="text-gray-700 text-sm mt-1 mb-2 max-w-[60vw]">
            A ticket for all three events is £60, saving you £7 compared to three individual tickets
          </p>
          <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />
          {dinnerQty > 0 && (
            <>
              <fieldset className="w-full max-w-prose mx-0 my-2 flex flex-col justify-center items-start gap-3">
                <legend className="text-xl font-title my-2">Dinner Guests</legend>
                <p className="mb-1 text-gray-700">
                  Please enter the names of all dinner guests as they should appear on place cards.
                </p>
                {dinnerNameIndices.map((idx) => (
                  <div key={idx} className="w-full grid grid-cols-2 gap-2 md:gap-4 items-start">
                    <TextField
                      name={`dinnerFirstNames.${idx}`}
                      label="First Name"
                      register={register}
                      options={{ required: "Please enter a first name" }}
                      errors={errors}
                    />
                    <TextField
                      name={`dinnerLastNames.${idx}`}
                      label="Last Name"
                      register={register}
                      options={{ required: "Please enter a last name" }}
                      errors={errors}
                    />
                  </div>
                ))}
              </fieldset>
              <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />
            </>
          )}
          <fieldset className="w-full max-w-prose mx-0 my-2 flex flex-col justify-center items-start gap-3">
            <legend className="text-xl font-title my-2">Requirements or Adjustments</legend>
            <TextArea
              name="specialReqs"
              label="Dietary or other requirements"
              register={register}
              options={{ required: false }}
              errors={errors}
            />
            <p className="-mt-2 mb-2 text-gray-700">
              If you have any requirements or adjustments we can make to enable you to participate
              fully in the event, please let us know about them here. This includes dietary
              requirements and allergies for all members of your party.
            </p>
            {dinnerQty > 0 && (
              <>
                <TextArea
                  name="seatingReqs"
                  label="Seating Requests"
                  register={register}
                  options={{ required: false }}
                  errors={errors}
                />
                <p className="-mt-2 text-gray-700">
                  Please let us know if there's anyone you would like to be seated with at dinner.
                </p>
              </>
            )}
          </fieldset>
          <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />
          <fieldset className="w-full max-w-prose mx-0 my-2 flex flex-col justify-center items-start gap-3">
            <legend className="text-xl font-title my-2">Optional Donation</legend>
            <TextField
              name="donationValue"
              label="Would you like to make a donation to the Cecilian Society?"
              register={register}
              options={{ required: false }}
              errors={errors}
              widthClasses="w-full md:w-1/2"
              prefix="£"
            />
            <p className="-mt-2 text-gray-700">
              Enter the amount here if so. This is entirely optional, and any donation you make will
              be added to general Society funds for the Committee to use at their discretion.
            </p>
          </fieldset>
          <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 py-2">
            <p className="text-gray-900 text-xl font-title p-3 md:p-2 pt-0 border-b border-archiveYellow-500">
              Grand Total:{" "}
              <b className="text-black">
                £{getTotalCost({ ceilidhQty, concertQty, dinnerQty }) / 100 + donationValue}
              </b>
            </p>
            <ButtonLink buttonType="submit" onClick={() => {}}>
              Confirm and Pay
            </ButtonLink>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Tickets70th;
