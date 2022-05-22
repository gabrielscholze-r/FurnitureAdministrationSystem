import React, { useEffect, useState } from 'react';
import API from '../../config/js/API';
import './index.css'
function Report() {
    const [reports, setReports] = useState([])
    const [sorted, setSorted] = useState(false)
    const [filter, setFilter] = useState(0)
    useEffect(() => {
        async function getLists() {
            const list = await API.get('/record')
            setReports(list.data)
        }
        getLists()
    }, [])
    // useEffect(async () => {

    // }, [filter])
    // useEffect(() => {
    //     console.log(sorted)
    // }, [sorted])
    return (
        <div>
            <select className="month-selector p-1 m-2" value={filter} onChange={e => setFilter(e.target.value)}>
                <option value={0}>Amount</option>
                <option value={1}>Price</option>
                <option value={2}>Date</option>
            </select>
            <select className="month-selector p-1 m-2" value={sorted} onChange={e => setSorted(e.target.value)}>
                <option value={false}>Ascending</option>
                <option value={true}>Descending</option>
            </select>
            {
                {
                    0: {
                        true: reports.sort(function (f, s) {
                            return s.qtd - f.qtd
                        }),
                        false: reports.sort(function (f, s) {
                            return f.qtd - s.qtd
                        })
                    }[sorted],
                    1: {
                        true: reports.sort(function (f, s) {
                            return s.price - f.price
                        }),
                        false: reports.sort(function (f, s) {
                            return f.price - s.price
                        })
                    }[sorted],
                    2: {
                        true: reports.sort(function (f, s) {
                            return s.month - f.month
                        }),
                        false: reports.sort(function (f, s) {
                            return f.month - s.month
                        })
                    }[sorted]
                }[filter]
            }
            {/* CHANGE THE DATE TO A NUMBER OS MILLISSECONDS FROM 1970 TO NOW, EASIER TO FILTER!!!!!!!! */}
        </div>
    );
}

export default Report;