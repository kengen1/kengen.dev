import React from "react";
import { BiHome as HomeIcon } from "react-icons/bi";
import { LinkButton } from "../Button";
import styles from "./ErrorPage.module.scss";
import { CentralContainer, ContentContainer } from "../Container";


interface Props {
    errorMessage: string;
    homeUrl: string;
    errorCode?: string;
}

const ErrorMessage: React.FC<Props> = ({
    errorCode,
    errorMessage,
    homeUrl,
}) => {
    return (
        <div className={styles.errorPage}>
            <CentralContainer className={styles.errorContainer}>
                <ContentContainer centerContents>
                    {errorCode && <h1>{errorCode}</h1>}
                    <p suppressHydrationWarning>{errorMessage}</p>
                    {homeUrl && (
                        <LinkButton
                            text="Go Home"
                            href={homeUrl}
                            callToAction
                            icon={<HomeIcon />}
                            iconPosition="left"
                            shape="pill"
                        />
                    )}
                </ContentContainer>
            </CentralContainer>
        </div>
    );
};

export default ErrorMessage;