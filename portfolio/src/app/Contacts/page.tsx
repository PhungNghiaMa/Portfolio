import phone from "/phone.png";
import gmail from "/gmail.png";
import Image from "next/image";
import Link from "next/link";
import "./contact.css";

export default function Contacts() {
    return (
        <div className="Container w-full overflow-auto px-22">
            <div className="Title">
                <h1 className="text-5xl font-bold italic ">contacts</h1>
            </div>
            <div className="ContactContainer w-full h-auto py-16">
                <div className="PhoneContact w-full h-auto flex flex-row row-auto py-2 items-center gap-5 ">
                    <Image src={"/phone.png"} alt="Phone_Icon" width={50} height={50} />
                    <span className="text-md font-semibold italic">0934153439</span>
                </div>
                <div className="PhoneContact w-full h-auto flex flex-row row-auto py-2 items-center gap-5">
                    <Image src={"/gmail.png"} alt="Gmail_Icon" width={50} height={50} />
                    <a href="mailto:phungnghia291@gmail.com" className="text-md font-semibold italic">
                        phungnghia291@gmail.com
                    </a>
                </div>
                <div className="PhoneContact w-full h-auto flex flex-row row-auto py-2 items-center gap-5">
                    <Image src={"/facebook.png"} alt="Facebook_Icon" width={50} height={50} />
                    <a href="https://www.facebook.com/nghia.ma.7773631" className="text-md font-semibold italic">
                        Nghĩa Mã
                    </a>
                </div>
            </div>
        </div>
    );
}