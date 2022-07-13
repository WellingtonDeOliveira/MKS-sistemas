import './Nav.css'
import './compras.css'
import { useState } from 'react';
import MediaQuery from 'react-responsive';
import { ItemCompras } from '../ItemCompra/ItemCompra';

export function Nav(){
  const [style, setStyle] = useState('paginaComprasNone')
  const [contador, setContador] = useState(0);


  function carrinho(){
    setStyle('paginaCompras')
  }

  function carrinhoNone(){
    setStyle('paginaComprasNone')
  }

  function atualizar(){
    setContador(+localStorage.getItem('contador')!/4)
  }

  setInterval(atualizar, 1000)

  function mostrarTotal(){
    let total = 0;
    for(let i = 1; i<=8; i++){
      total += +localStorage.getItem('carrinho'+i+2)!
    }
    return total.toFixed(2).toString().replace('.00','');
  }

  return(
    <div>
      <div className='divViewNav'>
          <div className='divRowNav'>
              <h1 className='titleNav'>MKS</h1>
              <p className='subtitleNav'>Sistemas</p>
          </div>
          <button className='buttonNav' onClick={carrinho} id='root'>
                <img style={{height: 18}} src="../assets/Vector.svg" alt="carrinho" className='svgNav'/>
                <span className='quantidadeNav'>{contador}</span>
          </button>
      </div>
      <MediaQuery maxWidth={569}>
          <div className={style}>
            <div className='carrinhoComprasZero'>
                <div className="headerCompras">
                    <h2 className="titleCompras">Carrinho de Compras</h2>
                    <button className="buttonCompras" onClick={carrinhoNone}>
                        X
                    </button>
                </div>
                  <ItemCompras />
                <div className='totalViewCompras'>
                    <h2 className='totalTitleCompras'>Total:</h2>
                    <h2 className='totalValueCompras'>R${mostrarTotal()}</h2>
                </div>
                <button className='finalizarCompras' onClick={()=>{localStorage.clear()}}>Finalizar Compras</button>
            </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={570}>
          <div className={style}>
            <div className='carrinhoCompras'>
                <div className="headerCompras">
                    <h2 className="titleCompras">Carrinho de Compras</h2>
                    <button className="buttonCompras" onClick={carrinhoNone}>
                        X
                    </button>
                </div>
                  <ItemCompras />
                <div className='totalViewCompras'>
                    <h2 className='totalTitleCompras'>Total:</h2>
                    <h2 className='totalValueCompras'>R${mostrarTotal()}</h2>
                </div>
                <button className='finalizarCompras' onClick={()=>{localStorage.clear()}}>Finalizar Compras</button>
            </div>
        </div>
      </MediaQuery>
    </div>
  );
}