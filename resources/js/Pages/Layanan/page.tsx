import Layout from "@/Layouts/Layout";
import { EvenService, OddService } from "./components/ServiceSection";
import ServiceForm from "./components/ServiceForm";

const ourServices = [
    {
        title: "Layanan Konsultasi",
        description:
            "Masyarakat pencari keadilan dapat menyampaikan keluh kesah atas permasalahan hukum yang terjadi, dengan menuliskan kronologi permasalahannya pada tombol konsultasi. Advokat kami nantinya akan mengidentifikasi, apakah ini merupakan permasalahan hukum keperdataan/bisnis atau pidana, atau bahkan bisa termasuk keduanya.",
        image: "./images/law-firm.png",
        href: "/layanan",
    },
    {
        title: "Layanan Konsultasi",
        description:
            "Masyarakat pencari keadilan dapat menyampaikan keluh kesah atas permasalahan hukum yang terjadi, dengan menuliskan kronologi permasalahannya pada tombol konsultasi. Advokat kami nantinya akan mengidentifikasi, apakah ini merupakan permasalahan hukum keperdataan/bisnis atau pidana, atau bahkan bisa termasuk keduanya.",
        image: "./images/law-firm1.png",
        href: "/layanan",
    },
    {
        title: "Layanan Konsultasi",
        description:
            "Masyarakat pencari keadilan dapat menyampaikan keluh kesah atas permasalahan hukum yang terjadi, dengan menuliskan kronologi permasalahannya pada tombol konsultasi. Advokat kami nantinya akan mengidentifikasi, apakah ini merupakan permasalahan hukum keperdataan/bisnis atau pidana, atau bahkan bisa termasuk keduanya.",
        image: "./images/law-firm2.png",
        href: "/layanan",
    },
    {
        title: "Layanan Konsultasi",
        description:
            "Masyarakat pencari keadilan dapat menyampaikan keluh kesah atas permasalahan hukum yang terjadi, dengan menuliskan kronologi permasalahannya pada tombol konsultasi. Advokat kami nantinya akan mengidentifikasi, apakah ini merupakan permasalahan hukum keperdataan/bisnis atau pidana, atau bahkan bisa termasuk keduanya.",
        image: "./images/law-firm3.png",
        href: "/layanan",
    },
];

const LayananPage = () => {
    return (
        <Layout>
            {ourServices.map((service, index) =>
                index % 2 ? (
                    <EvenService key={index} {...service} />
                ) : (
                    <OddService key={index} {...service} />
                )
            )}
            <ServiceForm />
        </Layout>
    );
};

export default LayananPage;
