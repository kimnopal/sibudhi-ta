import { Head, useForm } from '@inertiajs/react';
import React, { useEffect } from 'react'

export default function Create({ services }: any) {
    const { data, setData, post, errors, reset } = useForm({
        name: '',
        email: '',
        no_handphone: '',
        service_id: '',
        service_type_id: '',
        description: '',
        status: '',
    });

    const handleChange = (e: any) => {
        const key = e.target.id;
        const value = e.target.value;
        setData(key, value);
    }

    useEffect(() => {
        setData('service_type_id', '')
    }, [data.service_id])

    const onSubmit = (e: any) => {
        e.preventDefault();
        post(route('report.store'), {
            preserveScroll: true,
        });
    };

    return (
        <main className='container h-screen mt-10'>
            <Head title='Edit' />
            <h1 className="text-base-content text-4xl mb-5">Tambah Data Laporan</h1>

            <form onSubmit={onSubmit}>
                <div className="max-w-sm mb-6">
                    <div className="relative">
                        <input type="text" placeholder="Nama" value={data.name} onChange={handleChange} className={`input input-floating peer ${errors.name ? 'is-invalid' : ''}`} id="name" />
                        <label className="input-floating-label" htmlFor="name">Nama</label>
                    </div>
                    {errors.name && (
                        <span className="label">
                            <span className="label-text-alt">{errors.name}</span>
                        </span>
                    )}
                </div>

                <div className="max-w-sm mb-6">
                    <div className="relative">
                        <input type="text" placeholder="email" value={data.email} onChange={handleChange} className={`input input-floating peer ${errors.email ? 'is-invalid' : ''}`} id="email" />
                        <label className="input-floating-label" htmlFor="name">Email</label>
                    </div>
                    {errors.name && (
                        <span className="label">
                            <span className="label-text-alt">{errors.name}</span>
                        </span>
                    )}
                </div>

                <div className="max-w-sm mb-6">
                    <div className="relative">
                        <input type="text" placeholder="no_handphone" value={data.no_handphone} onChange={handleChange} className={`input input-floating peer ${errors.no_handphone ? 'is-invalid' : ''}`} id="no_handphone" />
                        <label className="input-floating-label" htmlFor="name">No Handphone</label>
                    </div>
                    {errors.name && (
                        <span className="label">
                            <span className="label-text-alt">{errors.name}</span>
                        </span>
                    )}
                </div>

                <div className="relative w-full mb-6">
                    <select className="select select-floating max-w-sm" aria-label="Select floating label" id="service_id" onChange={handleChange}>
                        <option value=''>--- Pilih Layanan Hukum ---</option>
                        {services.map((service: any) => (
                            <option key={service.id} value={service.id}>{service.name}</option>
                        ))}
                    </select>
                    <label className="select-floating-label" htmlFor="service_id" onChange={handleChange}>Layanan Hukum</label>
                </div>

                <div className="relative w-full mb-6">
                    <select className="select select-floating max-w-sm" aria-label="Select floating label" id="service_type_id" onChange={handleChange}>
                        <option value=''>--- Pilih Jenis Layanan ---</option>
                        {services[Number(data.service_id) - 1]?.service_types.map((service_type: any) => (
                            <option key={service_type.id} value={service_type.id}>{service_type.name}</option>
                        ))}
                    </select>
                    <label className="select-floating-label" htmlFor="service_type_id" onChange={handleChange}>Layanan Hukum</label>
                </div>

                <div className="relative w-full mb-4">
                    <select className="select select-floating max-w-sm" aria-label="Select floating label" id="status" onChange={handleChange}>
                        <option value=''>--- Pilih Status ---</option>
                        <option key={'penggugat'} value={'penggugat'}>Penggugat</option>
                        <option key={'tergugat'} value={'tergugat'}>Tergugat</option>
                    </select>
                    <label className="select-floating-label" htmlFor="status" onChange={handleChange}>Status</label>
                </div>

                <div className="sm:w-96 mb-6">
                    <label className="label label-text" htmlFor="description">Deskripsi</label>
                    <textarea className="textarea" placeholder="Deskripsi" id="description" onChange={handleChange}>{data.description}</textarea>
                </div>

                <button className="btn btn-soft btn-primary" type='submit' id='submit'>Tambah</button>
            </form>
        </main>
    )
}
