import EmailCollectionForm from "src/components/70th/EmailCollectionForm";

const Footer70th = () => {
  return (
    <footer className="w-screen bg-archiveBlue-500 flex flex-col justify-between items-center p-10">
      <EmailCollectionForm />
      <p className="text-white font-title">&copy; The Cecilian Society 2022</p>
    </footer>
  );
};

export default Footer70th;
