import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Show({ report }: any) {
    return (
        <main className='container h-screen mt-10'>
            <Head title='Show' />
            <h1 className="text-base-content text-4xl mb-5">Detail Data Laporan</h1>

            <div className="w-full overflow-x-auto">
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <td>{report.name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{report.email}</td>
                    </tr>
                    <tr>
                        <th>Layanan Hukum</th>
                        <td>
                            <span className="badge badge-soft badge-success text-xs me-2">{report.service_name}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Jenis Layanan</th>
                        <td>{report.service_type_name ? (
                            <span className="badge badge-soft badge-warning text-xs">{report.service_type_name}</span>
                        ) : '-'}
                        </td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{report.status ? report.status : '-'}</td>
                    </tr>
                    <tr>
                        <th>Deskripsi</th>
                        <td>{report.description}</td>
                    </tr>
                </table>

                <Link href={route('home')} className="btn btn-soft btn-primary mt-5">Kembali</Link>
            </div>
        </main>
    )
}
