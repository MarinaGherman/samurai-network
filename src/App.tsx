import React from "react";
import s from "./App.module.scss";
import styles from "./theme/Grid.module.scss";
import Header from "./common/Header";

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={s.appNew}>
                <Header/>
            </div>
        </div>
    );
};

export default App;
