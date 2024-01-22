import Link from "next/link";
import { MdWhatsapp, MdMailOutline } from "react-icons/md";

const ContactInfo = () => {
  return (
    <section>
      <div className="text-lg mt-8">
        <h2 className="font-bold text-xl mb-2">Telefone e email</h2>
        <span className="flex items-center gap-3">
          <Link
            className="rounded-sm hover:bg-primary100 hover:text-black"
            href="https://api.whatsapp.com/send?phone=5511941758475"
          >
            +55 11 941758475
          </Link>
          <MdWhatsapp />
        </span>
        <span className="flex items-center gap-3 ">
          <Link
            className="rounded-sm hover:bg-primary100 hover:text-black"
            href="mailto:guilhermelopes275@gmail.com"
          >
            guilhermelopes275@gmail.com
          </Link>
          <MdMailOutline />
        </span>
      </div>
      <div className="text-lg mt-4">
        <h2 className="font-bold text-xl mb-2">Localização</h2>
        <p>Jundiaí, São Paulo, Brasil</p>
      </div>
    </section>
  );
};

export default ContactInfo;
