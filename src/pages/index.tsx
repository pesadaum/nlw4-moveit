import { XpBar } from "../components/XpBar";
import { Profile } from "../components/Profile";
import Head from 'next/head';

import styles from '../styles/pages/home.module.css';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

export default function Home() {
    return (
        <div className={styles.container} >
            <Head>
                <title> Início | Move it!</title>
            </Head>
            <XpBar />
            <section>
                <div>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                </div>

                <div>

                </div>
            </section>
        </div>
    )
}
