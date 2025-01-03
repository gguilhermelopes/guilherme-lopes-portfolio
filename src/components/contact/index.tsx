import AnimateLeftIn from "../UI/AnimateLeftIn";
import TextDetails from "../UI/TextDetails";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  return (
    <AnimateLeftIn>
      <main className="mt-8 max-w-screen-xl mx-auto">
        <h1 className="font-bold text-lg sm:text-3xl">
          Sinta se livre para entrar em <TextDetails>contato</TextDetails>! 📧
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 place-content-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </AnimateLeftIn>
  );
};

export default ContactPage;
