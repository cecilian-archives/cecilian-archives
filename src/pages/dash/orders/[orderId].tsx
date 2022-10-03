import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import type { GetServerSideProps } from "next";
import DashLayout from "src/components/DashLayout";

import { unstable_getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
import { authOptions } from "src/pages/api/auth/[...nextauth]";
import { prisma } from "src/server/db/client";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import ButtonLink from "src/components/ButtonLink";
import { TextField, TextArea, NumberField } from "src/components/formFields";
import StarDivider from "src/components/StarDivider";
import { trpc } from "src/utils/trpc";
import { getTotalCost, numberiseInputs } from "src/server/checkout/eventHelpers";

const Tickets70th: NextPageWithLayout = () => {
  const { status } = useSession();
  const router = useRouter();

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

  const upsertOrder = trpc.salesOrders.upsertUserOrder.useMutation({
    onSuccess: (data) => {
      const checkoutSession = data?.checkoutSession as { url: string; expires_at: number };
      window.location.href = checkoutSession.url;
    },
  });

  const onSubmit = (data: any) => {
    const { orderId } = router.query;
    const id = (orderId && orderId !== "new" ? orderId : undefined) as string | undefined;

    const orderDetails = {
      ...data,
      ...numberiseInputs({
        ceilidhQtyVal: data.ceilidhQty,
        concertQtyVal: data.concertQty,
        dinnerQtyVal: data.dinnerQty,
        donationVal: data.donationValue,
      }),
    };

    upsertOrder.mutate({ id, orderDetails });
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
    <div className="flex flex-1 flex-col justify-start w-full min-h-screen bg-archiveBlue-50 py-8 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-prose mx-auto">
        <h2 className="text-3xl tracking-tight text-black">Tickets</h2>
        <p className="mt-2 mb-8 text-base text-gray-800">
          Book for what you'd like to do at the 70th Anniversary Celebration Weekend
        </p>
        <fieldset className="w-full max-w-prose mx-0 my-2 flex flex-col justify-center items-start gap-6">
          <legend className="text-2xl font-title pb-4">Events</legend>
          <NumberField
            title={
              <h4 className="text-xl">
                Ceilidh <span className="text-sm text-gray-500">(£15)</span>
              </h4>
            }
            description={
              <p>
                Our opening ceilidh to kick things off with a bang.
                <br />
                <span className="text-sm text-gray-500">
                  Fri 21st October,{" "}
                  <a
                    href="https://goo.gl/maps/c71PgSRzwRJ6i1Py6"
                    target="_blank"
                    className="underline text-gray-500 hover:text-gray-600"
                  >
                    National Piping Centre
                  </a>
                  , 7.30pm
                </span>
              </p>
            }
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
            description={
              <p>
                A celebration of 70 years of music. Please note that tickets are required whether
                you wish to participate in the concert or simply watch and enjoy.
                <br />
                <span className="text-sm text-gray-500">
                  Sat 22nd October,{" "}
                  <a
                    href="https://goo.gl/maps/Y3CTX9XzyLRvFAT88"
                    target="_blank"
                    className="underline text-gray-500 hover:text-gray-600"
                  >
                    Glasgow University Union
                  </a>
                  , 7 for 7.30pm
                </span>
              </p>
            }
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
            description={
              <p>
                The culmination of our celebrations, bringing everyone together for a formal
                black-tie dinner and no doubt some Cecilian shenanigans too.
                <br />
                <span className="text-sm text-gray-500">
                  Sun 23rd October,{" "}
                  <a
                    href="https://www.gghotel.co.uk/"
                    target="_blank"
                    className="underline text-gray-500 hover:text-gray-600"
                  >
                    Glasgow Grosvenor Hotel
                  </a>
                  , 7.30 for 8.00pm
                </span>
              </p>
            }
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
                Please enter the names of all dinner guests as you'd like them to appear on place
                cards.
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
            label="Would you like to add a donation to the Cecilian Society?"
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
          <ButtonLink
            buttonType="submit"
            onClick={() => {}}
            loading={upsertOrder.isLoading || upsertOrder.isSuccess}
          >
            Confirm and Pay
          </ButtonLink>
        </div>
        <div className="w-full text-right">
          {Boolean(upsertOrder.isError) && (
            <span className="text-base text-center max-w-prose text-red-600 mt-2">
              Something went wrong. Please try again.
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

Tickets70th.getLayout = (page: ReactElement) => {
  return <DashLayout>{page}</DashLayout>;
};

export default Tickets70th;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  const token = await getToken({ req: context.req });

  const user = await prisma.user.findUnique({
    where: { id: token?.sub },
    include: { profile: true },
  });

  if (!user?.profile) {
    return {
      redirect: {
        destination: "/dash/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
