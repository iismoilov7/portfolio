import { RootState } from '@src/store';
import { loginUser } from '@src/actions/authActions';
import { useAppDispatch, useAppSelector } from '@src/hooks/dispatch';
import { i18 } from '@src/hooks/languages';
import { LoginRequest } from '@src/models/auth';
import animate from '@src/utils/animation';
import React, { useEffect, useRef, useState } from 'react'
import Messages from '@src/components/common/Messages';
import { RESET_LOGIN_ERROR } from '@src/actions/actionTypes';

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({ }) => {
    const dispatch = useAppDispatch();
    const loginError = useAppSelector((state: RootState) => state.auth.error);
    const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated);
    const userRole = useAppSelector((state: RootState) => state.auth.user?.role);
    // Local state for form inputs
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const formRef = useRef<HTMLFormElement | null>(null);


    useEffect(() => {
        dispatch({ type: RESET_LOGIN_ERROR });
        if (isAuthenticated) {
            switch (userRole) {
                case "admin":
                    window.location.href = "/blog/create";
                    break;
                default:
                    window.location.href = "/blog";
                    break;
            }
        }
    }, [isAuthenticated]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const credentials: LoginRequest = { username, password };
        dispatch<any>(loginUser(credentials));
    };


    const hideForm = () => {
        if (!formRef.current) return;
        animate(formRef.current, {
            "animation": "animate__zoomOutDown",
            "is_show": false
        });
    }

    const fullscreenForm = () => {
        if (!formRef.current) return;
        formRef.current.classList.toggle("fullscreen");
        if (!document.fullscreenElement) {
            // Request fullscreen
            document.documentElement.requestFullscreen()
                .catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
        } else {
            // Exit fullscreen
            document.exitFullscreen();
        }
    }

    return (
        <div className="page-login fade-in mr-top-20">
            <h2 className="page-login__title title" dangerouslySetInnerHTML={{ __html: i18.t("login.title") }}></h2>
            <h4 className="page-login__subtitle subtitle">{i18.t("login.subtitle")}</h4>

            <form className="page-login__form" ref={formRef} onSubmit={handleSubmit}>
                <div className="page-login__form-topbar">
                    <div className="page-login__form-topbar-title">ismoil@fedora:~</div>
                    <div className="page-login__form-topbar-tools">
                        <div className="yellow" onClick={hideForm}></div>
                        <div className="green" onClick={fullscreenForm}></div>
                        <div className="red" onClick={hideForm}></div>
                    </div>
                </div>

                <div className="page-login__form-console">
                    <span className="accent">OS</span>: Fedora Linux 41 (Workstation Edition) <br />
                    <span className="accent">Host</span>: BBR-WAX9 M1040 <br />
                    <span className="accent">Shell</span>: bash 5.2.32 <br />
                    <span className="accent">Resolution</span>: 1920x1080 <br />
                    <span className="accent">DE</span>: GNOME 47.2 <br />
                    <span className="accent">WM</span> Theme: Dracula <br />
                    <span className="accent">Terminal</span>: gnome-terminal <br />
                    <span className="accent">CPU</span>: Intel i5-10210U (8) @ 4.200GHz <br />
                    <span className="accent">GPU</span>: Intel CometLake-U GT2 [UHD Graphics] <br />
                    <span className="accent">Memory</span>: 6083MiB / 7671MiB
                </div>


                <div className="page-login__form-input">
                    ❯<input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder={i18.t("login.form.username")}
                        required />
                </div>

                <div className="page-login__form-input">
                    ❯<input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder={i18.t("login.form.password")}
                        required
                    />
                </div>


                <div className="page-login__form-error">
                {loginError && <Messages message={loginError} status="error" />}
                </div>

                <button className="page-login__form-btn btn" type="submit">{i18.t("login.form.button")}</button>
            </form>
        </div>
    )
}

export default Login;
