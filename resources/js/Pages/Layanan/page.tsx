import Layout from "@/Layouts/Layout";
import ServiceSection from "./components/ServiceSection";
import ServiceForm from "./components/ServiceForm";

const ourServices = [
    {
        title: "Layanan Konsultasi",
        description:
            "Masyarakat pencari keadilan dapat menyampaikan keluh kesah atas permasalahan hukum yang terjadi, dengan menuliskan kronologi permasalahannya pada tombol konsultasi. Advokat kami nantinya akan mengidentifikasi, apakah ini merupakan permasalahan hukum keperdataan/bisnis atau pidana, atau bahkan bisa termasuk keduanya.",
        image: "./images/law-firm.png",
        href: "/layanan",
        id: "layanan-konsultasi",
    },
    {
        title: "Perkara Perdata",
        description:
            "Masyarakat pencari keadilan dapat menyampaikan keluh kesah atas permasalahan hukum yang terjadi, dengan menuliskan kronologi permasalahannya pada tombol konsultasi. Advokat kami nantinya akan mengidentifikasi, apakah ini merupakan permasalahan hukum keperdataan/bisnis atau pidana, atau bahkan bisa termasuk keduanya.",
        image: "./images/law-firm1.png",
        href: "/layanan",
        id: "perkara-perdata",
    },
    {
        title: "Perkara Pidana",
        description:
            "Masyarakat pencari keadilan dapat menyampaikan keluh kesah atas permasalahan hukum yang terjadi, dengan menuliskan kronologi permasalahannya pada tombol konsultasi. Advokat kami nantinya akan mengidentifikasi, apakah ini merupakan permasalahan hukum keperdataan/bisnis atau pidana, atau bahkan bisa termasuk keduanya.",
        image: "./images/law-firm2.png",
        href: "/layanan",
        id: "perkara-pidana",
    },
    {
        title: "Perkara Tata Usaha Negara",
        description:
            "Masyarakat pencari keadilan dapat menyampaikan keluh kesah atas permasalahan hukum yang terjadi, dengan menuliskan kronologi permasalahannya pada tombol konsultasi. Advokat kami nantinya akan mengidentifikasi, apakah ini merupakan permasalahan hukum keperdataan/bisnis atau pidana, atau bahkan bisa termasuk keduanya.",
        image: "./images/law-firm3.png",
        href: "/layanan",
        id: "perkara-tata-usaha",
    },
];

const LayananPage = ({ services }: any) => {
    return (
        <Layout>
            {ourServices.map((service, index) => (
                <ServiceSection key={index} {...service} />
            ))}
            <ServiceForm services={services} />
        </Layout>
    );
};

export default LayananPage;
