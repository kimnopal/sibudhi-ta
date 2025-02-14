import Table from '@/Components/Table'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Index({ reports }: any) {
    return (
        <main className='container h-screen mt-10'>
            <Head title='Index' />
            <div className='flex justify-between items-center'>
                <h1 className="text-base-content text-4xl mb-5">Data Laporan</h1>
                <Link href={route('report.create')} className="btn btn-soft btn-primary" id='tambah-data'>Tambah Data</Link>
            </div>
            <Table reports={reports.data} />
        </main>
    )
}
