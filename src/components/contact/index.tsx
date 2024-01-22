import AnimateLeftIn from "../UI/AnimateLeftIn";
import TextDetails from "../UI/TextDetails";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  return (
    <AnimateLeftIn>
      <main className="mt-8">
        <h1 className="font-bold text-3xl">
          Sinta se livre para entrar em <TextDetails>contato</TextDetails>! 📧
        </h1>
        <div className="grid grid-cols-2 place-content-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </AnimateLeftIn>
  );
};

export default ContactPage;
