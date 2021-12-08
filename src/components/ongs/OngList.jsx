import React, { useState } from 'react';
import i1 from '../../assets/img/ong1.png';
import i2 from '../../assets/img/ong2.png';
import i3 from '../../assets/img/ong3.png';

function OngList({ ongs }) {
    console.log({ongs})
    return (
        <ul>
            <li>
                <div>
                    <span>Ong caminho das crianças</span>
                    <div>
                        <img src={i1} />
                    </div>
                    <span>Crianças e adolescentes</span>
                    <button>Seguir</button>
                </div>
            </li>
            <li>
                <div>
                    <span>Amor de mãe</span>
                    <div>
                        <img src={i2} />
                    </div>
                    <span>Mulheres adultas</span>
                    <button>Seguir</button>
                </div>
            </li>
            <li>
                <div>
                    <span>Juntos contra os vicios</span>
                    <div>
                        <img src={i3} />
                    </div>
                    <span>Alcoolismo, drogas, vicios em geral.</span>
                    <button>Seguir</button>
                </div>
            </li>
        </ul>
    );
}

export default OngList;