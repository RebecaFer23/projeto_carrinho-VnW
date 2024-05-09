import * as S from "./Styled";
import { useState } from "react";

import balde from "../assets/balde.jpg";
import cesto from "../assets/cesto.jpg";
import chinelos from "../assets/chinelos.jpg";
import desinfetante from "../assets/desinfetante.jpg";
import esponjas from "../assets/esponjas.jpg";
import luvas from "../assets/luvas.jpg";
import panos from "../assets/panos.jpg";
import rodinho from "../assets/rodinho.jpg";
import spray from "../assets/spray.jpg";
import vassoura from "../assets/vassoura.jpg";
import escova from "../assets/escova.jpg";
import escovinha from "../assets/escovinha.jpg";
import carrinho from "../assets/carrinho.png";

export default function Main() {
  const [item, setItem] = useState(carrinho);
  const [produto, setProduto] = useState('Adicione os produtos no carrinho');
  const [num, setNum] = useState(null);

  const sub = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <S.Main>
      <S.BoxOne>
        <S.Title>
          Bela Limpeza <span>VnW</span>
        </S.Title>
        <h2>Nossos Produtos</h2>
      </S.BoxOne>
      <S.BoxTwo>
        <S.BoxItem>
          <img
            onClick={() => {
              setItem(balde), setProduto('R$ 12.00');
            }}
            src={balde}
            alt="imagem de um balde"
          />
          <img
            onClick={() => {
              setItem(cesto), setProduto('R$ 35,00');
            }}
            src={cesto}
            alt="imagem de uma cesto"
          />
          <img
            onClick={() => {
              setItem(chinelos), setProduto('R$ 20,00');
            }}
            src={chinelos}
            alt="imagem de uma chinelos"
            />
          <img
            onClick={() => {
                setItem(escova), setProduto('R$ 18,00');
            }}
            src={escova}
            alt="imagem de uma escova"
          />
          <img
            onClick={() => {
              setItem(spray), setProduto('R$ 8,00');
            }}
            src={spray}
            alt="imagem de um spray"
          />
          <img
            onClick={() => {
              setItem(desinfetante), setProduto('R$ 38,00');
            }}
            src={desinfetante}
            alt="imagem de um desinfetante"

          />
          <img
            onClick={() => {
              setItem(escovinha), setProduto('R$ 10,00');
            }}
            src={escovinha}
            alt="imagem de uma escovinha"
          />
          <img
            onClick={() => {
              setItem(luvas), setProduto('R$ 12.00');
            }}
            src={luvas}
            alt="imagem de luvas"
          />
          <img
            onClick={() => {
              setItem(vassoura), setProduto('R$ 42,00');
            }}
            src={vassoura}
            alt="imagem de uma vassoura"
          />
          <img
            onClick={() => {
              setItem(panos), setProduto('R$ 12,00');
            }}
            src={panos}
            alt="imagem de um panos"
          />
          <img
            onClick={() => {
              setItem(rodinho), setProduto('R$ 6,00');
            }}
            src={rodinho}
            alt="imagem de um rodinho"
          />
          <img
            onClick={() => {
              setItem(esponjas), setProduto('R$ 4,00');
            }}
            src={esponjas}
            alt="imagem de esponjas"

          />
        </S.BoxItem>
        <S.Ancora>
          <S.CartOne>
            <S.CartTwo>
              <img src={item} alt="carrinho de compras" />
              <h3>{produto}</h3>
              <h4>{num}</h4>
            </S.CartTwo>
            <S.PlusSub>
              <button onClick={() => {setNum(num + 1);}}>+</button>
              <button onClick={sub}>-</button>
            </S.PlusSub>
          </S.CartOne>
        </S.Ancora>
      </S.BoxTwo>
    </S.Main>
  );
}
