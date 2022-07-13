import './ItemCompras.css'

import MediaQuery from 'react-responsive';

export function ItemCompras(){
    function buttonMaisCarrinho(i:number){
        const valor = (+localStorage.getItem('carrinho'+i+2)! / ((+localStorage.getItem('carrinho'+i+3)! / 4)));
        localStorage.setItem('carrinho'+i+3, ((+localStorage.getItem('carrinho'+i+3)! + 4).toString()));
        localStorage.setItem('carrinho'+i+2, (valor * (+localStorage.getItem('carrinho'+i+3)! / 4)).toString())
        localStorage.setItem('contador', (+localStorage.getItem('contador')! + 4).toString())
        for(let i = 1; i <= 8; i++){
            itensCarrinho(i);
        }
    }
    
    function buttonRemover(i:number){
        localStorage.setItem('contador', (+localStorage.getItem('contador')! - (+localStorage.getItem('carrinho'+i+3)!)).toString())
        localStorage.removeItem('carrinho'+i+0);
        localStorage.removeItem('carrinho'+i+1);
        localStorage.removeItem('carrinho'+i+2);
        localStorage.removeItem('carrinho'+i+3);
        for(let i = 1; i <= 8; i++){
            itensCarrinho(i);
        }
    }
    
    function buttonMenosCarrinho(i:number){
        if((+localStorage.getItem('carrinho'+i+3)!) != 4){
            const valor = (+localStorage.getItem('carrinho'+i+2)!/(+localStorage.getItem('carrinho'+i+3)!/4));
            localStorage.setItem('carrinho'+i+3, ((+localStorage.getItem('carrinho'+i+3)! - 4).toString()));
            localStorage.setItem('carrinho'+i+2, ((+localStorage.getItem('carrinho'+i+2)! - valor).toString()));
            localStorage.setItem('contador', (+localStorage.getItem('contador')! - 4).toString())
            for(let i = 1; i <= 8; i++){
                itensCarrinho(i);
            }
        }
    }

    function itensCarrinho(i:number) {
        if(localStorage.getItem('carrinho'+i+0)){
            return(
                <div>
                    <MediaQuery maxWidth={569}>
                    <div className='itemComprasZero'>
                        <img className='imgComprasZero' src={localStorage.getItem('carrinho'+i+0)!} alt="" />
                        <h2 className='descricaoComprasZero'>{localStorage.getItem('carrinho'+i+1)}</h2>
                        <div className='columComprasZero'>
                            <div className='rowComprasZero'>
                                <span className='buttonMenosComprasZero' onClick={() => {buttonMenosCarrinho(i)!}}>-</span>
                                <span className='labelComprasZero'>{+localStorage.getItem('carrinho'+i+3)!/4}</span>
                                <span className='buttonMaisComprasZero' onClick={() => {buttonMaisCarrinho(i)!}}>+</span>
                            </div>
                            <h2 className='priceComprasZero'>R${localStorage.getItem('carrinho'+i+2)!.replace('.00','')}</h2> 
                        </div>
                        <button className='buttonRemoverItemZero' onClick={() => {buttonRemover(i)!}}>X</button>
                    </div>
                    </MediaQuery>
                    <MediaQuery minWidth={570}>
                    <div className='itemCompras'>
                        <img className='imgCompras' src={localStorage.getItem('carrinho'+i+0)!} alt="" />
                        <h2 className='descricaoCompras'>{localStorage.getItem('carrinho'+i+1)}</h2>
                        <div className='columCompras'>
                            <span className='qtdCompras'>Qtd</span> {//Tirar na responsividade
                            }<div className='rowCompras'>
                                <span className='buttonMenosCompras' onClick={() => {buttonMenosCarrinho(i)!}}>-</span>
                                <span className='labelCompras'>{+localStorage.getItem('carrinho'+i+3)!/4}</span>
                                <span className='buttonMaisCompras' onClick={() => {buttonMaisCarrinho(i)!}}>+</span>
                            </div>
                        </div>
                        <h2 className='priceCompras'>R${localStorage.getItem('carrinho'+i+2)!.replace('.00','')}</h2> 
                        <button className='buttonRemoverItem' onClick={() => {buttonRemover(i)!}}>X</button>
                    </div>
                    </MediaQuery>
                </div>         
            )
        }else{
            return null;
        }
        }
    return(
        <div className="itensCompras">
            {itensCarrinho(1)!}
            {itensCarrinho(2)!}
            {itensCarrinho(3)!}
            {itensCarrinho(4)!}
            {itensCarrinho(5)!}
            {itensCarrinho(6)!}
            {itensCarrinho(7)!}
            {itensCarrinho(8)!}
        </div>
    );
}