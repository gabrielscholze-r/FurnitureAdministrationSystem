import React, { useEffect, useState } from 'react';
import API from '../../config/js/API';
import './index.css'
function Report() {
    const [reports, setReports] = useState([])
    const [sorted, setSorted] = useState(0)
    const [filter, setFilter] = useState(1)
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

    function generateCSV() {
        const dictKeys = Object.keys(reports[0])
        dictKeys.pop()
        const dictCSV = reports.map(dict => (
            dictKeys.map(key => dict[key]).join(',')
        ))
        const result = "data:text/csv;charset=utf-8," + [dictKeys.join(','), ...dictCSV].join('\n')
        var encoded = encodeURI(result)
        window.open(encoded)
    }

    function generateReport(list, key) {
        const result = list.reduce((a,{_id,month,dateTime,price,qtd,__v})=>{
            a[month] = a[month] || {_id,month,dateTime,price,qtd,__v};
            a[month].price += price;
            a[month].qtd+=qtd;
            return a;
        },{})
        Object.entries(result).map(data => {
            delete data[1]["_id"]
            delete data[1]["__v"]
            delete data[1]["dateTime"]
        });
        const dictKeys = Object.entries(result).map(data => {
            return Object.keys(data[1])
        }).pop();

        const listDicts = []
        Object.entries(result).map(data => {
            listDicts.push(data[1])
        })

        const dictCSV = listDicts.map(dict => (
            dictKeys.map(key => dict[key]).join(',')
        ))
        const csv = "data:text/csv;charset=utf-8," + [dictKeys.join(','), ...dictCSV].join('\n')
        var encoded = encodeURI(csv)
        window.open(encoded)

        
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
            <div>
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
            <button onClick={e => generateCSV()}>Export</button>
            <button onClick={e => { console.log(generateReport(reports, "month")) }}>Generate Report</button>
        </div>
    );
}

export default Report;