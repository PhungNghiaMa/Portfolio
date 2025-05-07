import Image from "next/image";
import "./contact.css";

export default function Contacts() {
    return (
        <div className="ContactContainer w-full overflow-auto px-22">
            <div className="Title">
                <h1 className="text-5xl title font-bold italic ">contacts</h1>
            </div>
            <div className="ContactDetailContainer w-full h-auto py-16">
                <div className="PhoneContact Contact w-full h-auto flex flex-row row-auto py-2 items-center gap-5 ">
                    <Image className="ImgContainer" src={"/phone.png"} alt="Phone_Icon" width={50} height={50} />
                    <span className="text-md font-semibold italic">0934153439</span>
                </div>
                <div className="GmailContact Contact w-full h-auto flex flex-row row-auto py-2 items-center gap-5">
                    <Image className="ImgContainer" src={"/gmail.png"} alt="Gmail_Icon" width={50} height={50} />
                    <a href="mailto:phungnghia291@gmail.com" className="text-md font-semibold italic">
                        phungnghia291@gmail.com
                    </a>
                </div>
                <div className="FacebookContact Contact w-full h-auto flex flex-row row-auto py-2 items-center gap-5">
                    <Image className="ImgContainer" src={"/facebook.png"} alt="Facebook_Icon" width={50} height={50} />
                    <a href="https://www.facebook.com/nghia.ma.7773631" className="text-md font-semibold italic">
                        Nghĩa Mã
                    </a>
                </div>
            </div>
        </div>
    );
}