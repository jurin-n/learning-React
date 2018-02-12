import React from 'react';

const LeftNav = () => 
    <div className="left-nav card col-md-3 order-first">
        <div className="card">
            <div className="card-header">
                タグ
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">あとで読む</li>
                <li className="list-group-item">AWS</li>
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