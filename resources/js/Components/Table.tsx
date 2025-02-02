import { Link } from '@inertiajs/react'
import React from 'react'

export default function Table({ reports }: any) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>No Handphone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report: any) => (
                        <tr key={report.id}>
                            <td className="text-nowrap name">{report.name}</td>
                            <td>{report.email}</td>
                            <td>
                                <span className="badge badge-soft badge-success text-xs me-2">{report.service_name}</span>
                                {report.service_type_name && (
                                    <span className="badge badge-soft badge-warning text-xs">{report.service_type_name}</span>
                                )}
                            </td>
                            <td className="text-nowrap">{report.no_handphone}</td>
                            <td>
                                <Link href={route('report.edit', report.id)} className="btn btn-circle btn-text btn-sm" aria-label="Action Link"><span className="icon-[tabler--pencil] size-5"></span></Link>
                                <Link href={route('report.delete', report.id)} method='delete' className="btn btn-circle btn-text btn-sm" aria-label="Action Link"><span className="icon-[tabler--trash] size-5"></span></Link>
                                <Link href={route('report.show', report.id)} className="btn btn-circle btn-text btn-sm" aria-label="Action Link"><span className="icon-[tabler--eye] size-5"></span></Link>
                            </td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td className="text-nowrap">Jane Smith</td>
                        <td>janesmith@example.com</td>
                        <td><span className="badge badge-soft badge-error text-xs">Rejected</span></td>
                        <td className="text-nowrap">March 2, 2024</td>
                        <td>
                            <button className="btn btn-circle btn-text btn-sm" aria-label="Action button"><span className="icon-[tabler--pencil] size-5"></span></button>
                            <button className="btn btn-circle btn-text btn-sm" aria-label="Action button"><span className="icon-[tabler--trash] size-5"></span></button>
                            <button className="btn btn-circle btn-text btn-sm" aria-label="Action button"><span className="icon-[tabler--dots-vertical] size-5"></span></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-nowrap">Alice Johnson</td>
                        <td>alicejohnson@example.com</td>
                        <td><span className="badge badge-soft badge-info text-xs">Applied</span></td>
                        <td className="text-nowrap">March 3, 2024</td>
                        <td>
                            <button className="btn btn-circle btn-text btn-sm" aria-label="Action button"><span className="icon-[tabler--pencil] size-5"></span></button>
                            <button className="btn btn-circle btn-text btn-sm" aria-label="Action button"><span className="icon-[tabler--trash] size-5"></span></button>
                            <button className="btn btn-circle btn-text btn-sm" aria-label="Action button"><span className="icon-[tabler--dots-vertical] size-5"></span></button>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-nowrap">Bob Brown</td>
                        <td>bobrown@example.com</td>
                        <td><span className="badge badge-soft badge-primary text-xs">Current</span></td>
                        <td className="text-nowrap">March 4, 2024</td>
                        <td>
                            <button className="btn btn-circle btn-text btn-sm" aria-label="Action button"><span className="icon-[tabler--pencil] size-5"></span></button>
                            <button className="btn btn-circle btn-text btn-sm" aria-label="Action button"><span className="icon-[tabler--trash] size-5"></span></button>
                            <button className="btn btn-circle btn-text btn-sm" aria-label="Action button"><span className="icon-[tabler--dots-vertical] size-5"></span></button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
