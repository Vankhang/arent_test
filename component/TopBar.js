import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import styles from "@/styles/component/TopBar.module.scss";
import { Challenge, Logo, Menu, Notification, Record } from "./Icon";

export default function TopBar(props) {
    const router = useRouter();

    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(router.asPath)
    }, [router.asPath]);

    const LIST_OPTION = [
        { name: "自分の記録", url: "/home/my-record"},
        { name: "体重グラフ", url: ""},
        { name: "目標", url: ""},
        { name: "選択中のコース", url: ""},
        { name: "コラム一覧", url: "/home/column-page"},
        { name: "設定", url: ""}
    ]
    
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.col_logo}`}>
                <div className={`${styles.logo_icon}`} onClick={() => router.push("/home/top-page")}>
                    <Logo />
                </div>
            </div>
            <div className={`${styles.col_menu}`}>
                <div 
                    className={`${styles.menu_item} ${currentPath == "/home/my-record" ? styles.selected : ""}`} 
                    onClick={() => router.push("/home/my-record")}
                >
                    <div className={`${styles.menu_icon}`}>
                        <Record />
                    </div>
                    <div className={`${styles.menu_title}`}>自分の記録</div>
                </div>
                <div 
                    className={`${styles.menu_item} ${currentPath == "/home/top-page" ? styles.selected : ""}`} 
                    onClick={() => router.push("/home/top-page")}
                >
                    <div className={`${styles.menu_icon}`}>
                        <Challenge />
                    </div>
                    <div className={`${styles.menu_title}`}>チャレンジ</div>
                </div>
                <div 
                    className={`${styles.menu_item} ${currentPath == "/home/column-page" ? styles.selected : ""}`} 
                    onClick={() => router.push("/home/column-page")}
                >
                    <div className={`${styles.menu_icon}`}>
                        <Notification />
                        <div className={`${styles.noti_number}`}>
                            1
                        </div>
                    </div>
                    <div className={`${styles.menu_title}`}>お知らせ</div>
                </div>
                <button 
                    type="button" data-bs-toggle="dropdown"
                    className={`dropdown-toggle ${styles.menu_item} ${styles.menu_item_option}`} 
                >
                    <div className={`${styles.menu_icon}`}>
                        <Menu />
                    </div>
                </button>
                <div className={`dropdown-menu ${styles.option_input_menu}`}>
                    {LIST_OPTION.map((option, index) => (
                        <a key={index} className={`dropdown-item ${styles.option_input_item}`} onClick={() => {
                            console.log(option);
                            option.url && router.push(option.url);
                        }}>
                            {option.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

