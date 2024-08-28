import React from "react";

const ourServices = [
    "Konsultasi Hukum",
    "Pembuatan dokumen untuk persidangan perkara perdata/ Bisnis, mulai dari gugatan/ jawaban, replik/duplik, kesimpulan, mapun memori banding, kasasi ataupun Peninjauan Kembali.",
    "Pembuatan dokumen untuk persidangan perkara pidana, mulai dari penyusunan laporan, pembuatan pembelaan (pledoi), eksepsi, kesimpulan, mapun memori banding, kasasi ataupun Peninjauan Kembali.",
    "Pembuatan dokumen untuk persidangan perkara di pengadilan tata usaha negara, meliputi: gugatan/ jawaban, replik/duplik, kesimpulan, mapun memori banding, kasasi ataupun Peninjauan Kembali.",
];

const Service = () => {
    return (
        <section className="container max-w-screen-lg space-y-6 py-12">
            <h2 className="font-bold text-2xl">
                Layanan yang kami sediakan meliputi :
            </h2>
            <ol type="1" className="font-medium list-decimal space-y-2">
                {ourServices.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ol>
        </section>
    );
};

export default Service;
