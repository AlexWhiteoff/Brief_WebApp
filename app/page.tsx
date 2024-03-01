import Image from "next/image";
import styles from "@/app/ui/brief.module.css"

export default function Home() {
    return (
        <main className="">
            <h1 className="">Бриф на розробку Веб додатку</h1>
            <div className={styles.required}>
                <span className="text-slate-500">відмічено пункти, що обов'язкові до заповнення</span>
            </div>
            <div className="content-block">
                <h2 className="text-xl font-semibold">Вступ</h2>
                <div>
                    <div></div>
                </div>
            </div>
        </main>
    );
}
