import { ChangeEvent, useState } from "react";

import styles from "./App.module.css";
import { CheckBoxListItem } from "./components/CheckBoxListItem/CheckBoxListItem";
import { ResultListItem } from "./components/ResultListItem/ResultListItem";

function App() {
  const [selectedMen, setSelectedMen] = useState(Array<string>);
  const [selectedWomen, setSelectedWomen] = useState(Array<string>);

  const [menPairs, setMenPairs] = useState(Array<Array<string>>);
  const [womenPairs, setWomenPairs] = useState(Array<Array<string>>);
  const [hasResult, setHasResult] = useState(false);

  const men = [
    "Aldeir",
    "Balbino",
    "Eduardo",
    "Elton",
    "Rafael",
    "Andre",
    "Evandro",
    "Leonardo",
    "Marcio",
    "Nicolas",
    "Reginaldo",
    "Wanderley",
    "Victor Hugo",
    "Amarildo",
    "Fabio",
    "Lucas",
    "Marcos",
    "Pedro",
    "Saulo",
  ];

  const women = [
    "Ana Gomes",
    "Celina",
    "Elizele",
    "Laureci",
    "Regina",
    "Samantha ",
    "Cristiane",
    "Elizabeth",
    "Isomar",
    "Júlia",
    "Renata",
    "Steffany",
    "Suzana",
    "Yasmin",
    "Debora",
    "Ivanete",
    "Laura",
    "Leticia",
    "Patricia",
    "Salete",
    "Selma",
    "Suemi",
    "Tatiana",
    "Tatiane",
  ];

  const handleCkeckMan = (element: ChangeEvent<HTMLInputElement>) => {
    const selectedPublisher: string = element.target.value;
    if (element.target.checked) {
      setSelectedMen([...selectedMen, selectedPublisher]);
    } else {
      const selectedMenCopy = [...selectedMen];
      const indexToRemove = selectedMen.indexOf(selectedPublisher);

      selectedMenCopy.splice(indexToRemove, 1);

      setSelectedMen([...selectedMenCopy]);
    }
  };

  const handleCkeckWoman = (element: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPublisher: string = element.target.value;
    if (element.target.checked) {
      setSelectedWomen([...selectedWomen, selectedPublisher]);
    } else {
      const selectedWomenCopy = [...selectedWomen];
      const indexToRemove = selectedWomen.indexOf(selectedPublisher);

      selectedWomenCopy.splice(indexToRemove, 1);

      setSelectedWomen([...selectedWomenCopy]);
    }
  };

  const sortPublishers = () => {
    console.log(selectedMen);
    console.log(selectedWomen);

    const menToSort: Array<string> = [...selectedMen];

    const menPairs: Array<Array<string>> = [];
    let nextPair: Array<string> = [];
    for (let i = 0; i < selectedMen.length; i++) {
      const raffledManIndex = Math.floor(Math.random() * menToSort.length);

      const publisher = menToSort.splice(raffledManIndex, 1);

      nextPair.push(publisher[0]);

      if (nextPair.length === 2 || i === selectedMen.length - 1) {
        menPairs.push(nextPair);
        nextPair = [];
      }
    }

    setMenPairs([...menPairs]);

    const womenToSort: Array<string> = [...selectedWomen];

    const womenPairs: Array<Array<string>> = [];
    let nextWomenPair: Array<string> = [];
    for (let i = 0; i < selectedWomen.length; i++) {
      const raffledManIndex = Math.floor(Math.random() * womenToSort.length);

      const publisher = womenToSort.splice(raffledManIndex, 1);

      nextWomenPair.push(publisher[0]);

      if (nextWomenPair.length === 2 || i === selectedWomen.length - 1) {
        womenPairs.push(nextWomenPair);
        nextWomenPair = [];
      }
    }

    setWomenPairs([...womenPairs]);

    setHasResult(true);
  };

  const handleCleanUpApp = () => {
    setHasResult(false);
    setSelectedMen([]);
    setSelectedWomen([]);
  };

  return (
    <div className={styles.container}>
      {!hasResult ? (
        <div className={styles.listsContainer}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span>Homens</span>
            </li>
            {men.sort().map((publisher) => {
              return (
                <CheckBoxListItem value={publisher} onChange={handleCkeckMan} />
              );
            })}
          </ul>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span>Mulheres</span>
            </li>
            {women.sort().map((publisher) => {
              return (
                <CheckBoxListItem
                  value={publisher}
                  onChange={handleCkeckWoman}
                />
              );
            })}
          </ul>{" "}
        </div>
      ) : (
        <></>
      )}
      <div className={styles.resultContainer}>
        {!hasResult ? (
          <div>
            <button onClick={() => sortPublishers()}>Designar</button>
          </div>
        ) : (
          <div className={styles.resultPanel}>
            <div className={styles.result}>
              <div className={styles.resultList}>
                <h3>Homens</h3>
                <br />
                {menPairs.map((pair: Array<string>) => {
                  const item: ResultListItem = {
                    firstPublisher: pair[0],
                    secondPublisher: pair[1],
                  };

                  return <ResultListItem item={item} />;
                })}
              </div>
              <div className={styles.resultList}>
                <h3>Mulheres</h3>
                <br />
                {womenPairs.map((pair: Array<string>) => {
                  return (
                    <span>
                      {pair[0]} - {pair[1]}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <button onClick={() => handleCleanUpApp()}>Limpar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
