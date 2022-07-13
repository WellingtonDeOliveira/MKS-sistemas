import './View.css'

type Props = {
    id?: string
    name?: string
    photo?: string
    price?: string
    description?: string
}

export function View({id, name, photo, price, description}: Props){

    function comprar(){
        for(let i = 0; i<4; i++){
            if(!localStorage.getItem('carrinho'+id+0)){
                localStorage.setItem('carrinho'+id+i, photo!)
            }else if(!localStorage.getItem('carrinho'+id+1)){
                localStorage.setItem('carrinho'+id+i, name!)
            }else if(!localStorage.getItem('carrinho'+id+2)){
                localStorage.setItem('carrinho'+id+i, price!)
            }else if(!localStorage.getItem('carrinho'+id+3)){
                localStorage.setItem('carrinho'+id+i, '4')
                let j = 0;
                if(localStorage.getItem('contador')){
                    j = +localStorage.getItem('contador')!;
                }
                localStorage.setItem('contador', (+localStorage.getItem('carrinho'+id+3)! + j).toString())
            }else{
                localStorage.setItem('carrinho'+id+3, (+localStorage.getItem('carrinho'+id+3)! + 1).toString())
                localStorage.setItem('contador', (+localStorage.getItem('contador')! + 1).toString())
                if((Number.isInteger((+localStorage.getItem('carrinho'+id+3)!) / 4))){
                    localStorage.setItem('carrinho'+id+2, (+price! * 
                                                           (+localStorage.getItem('carrinho'+id+3)!/4)).toString())
                }
            }
        }
        //localStorage.clear()
    }
    return(
        <div>
            <div className="produtoOneView">
            <img src={photo ? photo : ''} alt="relogio" className='imgView'/>
                <div className="nameValueView">
                    <span className="titleView">{name}</span>
                    <span className="titleView"> </span>
                    <span className="valueView">R${price?.replace('.00','')}</span>
                </div>
                <p className='descriptView' title={description}>{description}</p>
                <span className='buttonView' onClick={comprar}>
                    <img style={{width: 13}} src="../assets/shopping-bag.svg" alt="comprar" />
                    <span className='titleButtonVIew'>COMPRAR</span>
                </span>
            </div>
        </div>
    );
}