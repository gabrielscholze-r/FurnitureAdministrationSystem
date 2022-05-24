import React, { useEffect, useState } from 'react';
import API from '../../config/js/API';
import './index.css'
function Report() {
    const [reports, setReports] = useState([])
    const [sorted, setSorted] = useState(0)
    const [filter, setFilter] = useState(0)
    useEffect(() => {
        async function getLists() {
            const list = await API.get('/record')
            setReports(list.data)
        }
        getLists()
    }, [])
    function sortBy(filter, sort) {
        var rep = reports;
        if (filter == 0) {
            rep = rep.sort(function (first, second) {
                if (sort == 1) {
                    return second.qtd - first.qtd;
                }
                return first.qtd - second.qtd;
            });
        }
        else if (filter == 1) {
            rep.sort(function (first, second) {
                if (sort == 1) {
                    return second.price - first.price;
                }
                return first.price - second.price;
            });
        }
        else {
            rep.sort((first, second) => {
                if (sort == 1) {
                    return second.dateTime - first.dateTime;
                }
                return first.dateTime - second.dateTime;
            });
        }
        setSorted(sort)
        setReports(rep)
        setFilter(filter)
    }

    return (
        <div>
            <div>
                <select className="month-selector p-1 m-2" value={filter} onChange={e => sortBy(e.target.value, sorted)}>
                    <option value={0}>Amount</option>
                    <option value={1}>Price</option>
                    <option value={2}>Date</option>
                </select>
                <select className="month-selector p-1 m-2" value={sorted} onChange={e => sortBy(filter, e.target.value)}>
                    <option value={0}>Ascending</option>
                    <option value={1}>Descending</option>
                </select>

            </div>
            {reports.map(data =>

            (
                <div className="report-info-container p-3">
                    <h3 className="title px-2">Date: </h3>
                    {/* .toString().replace(" GMT-0300 (Hora padrão de Brasília)", "") */}
                    <h4 className="report-info px-2">{new Date(data.dateTime).toLocaleString()}</h4>
                    <h3 className="title px-2">Value: </h3>
                    <h4 className="report-info px-2">{data.price}</h4>
                    <h3 className="title px-2">Amount: </h3>
                    <h4 className="report-info px-2">{data.qtd}</h4>
                </div>
            )
            )}
        </div>
    );
}

export default Report;