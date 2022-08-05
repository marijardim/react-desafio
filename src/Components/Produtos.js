import React from 'react'
import styles from './Produtos.module.css'
import {Link} from 'react-router-dom'
import Head from './Head'

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(()=>{
  fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then(r => r.json())
  .then(rjson => setProdutos(rjson))
  },[]);

  if(produtos === null) return null;

  return (
    <section className={styles.produtos}>
      <Head title="Ranek" description="Descrição do site Ranek"/>
     {produtos.map((produto) =>(
      <Link to={`produto/${produto.id}`} key={produto.id}> 
      <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
      <h2>{produto.nome}</h2>
      <p>R$ {produto.preco}</p>
      <p>{produto.descricao}</p>
        </Link>
     ))}
      

    </section>
  )
}

export default Produtos
