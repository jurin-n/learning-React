import React from 'react';

const LeftNav = ({selected=false}) => 
    <div className="left-nav card col-md-3 order-first">
        <div className="card">
            <div className="card-header">
                タグ
            </div>
            <ul className="list-group list-group-flush">
                <li 
                    className={
                        (selected)?
                            "active list-group-item d-flex justify-content-between align-items-center":
                            "list-group-item d-flex justify-content-between align-items-center"
                            }
                >
                    あとで読む
                    <span class="badge badge-primary badge-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    AWS
                    <span class="badge badge-primary badge-pill">3</span>
                </li>
            </ul>
        </div>
        <hr/>
        <div className="card">
            <div className="card-header">
                登録日
            </div>
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="date" className="form-control" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                    から
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="date" className="form-control" />
                    </div>
                </div>
            </form>
        </div>
    </div>

export default LeftNav