import style from './_privacyPolice.module.scss'
const PrivacyPolicePage  = () => {
    return (
        <>
            <div className={style.headerPrivacy}>
                <h1 className={style.headerPrivacy_namePage}>Privacy Policy</h1>
                <div className={style.headerPrivacy_navPanel}>
                    <p className={style.headerPrivacy_navPanel_text}> <span className={style.PrivacyNavSpan}>Home</span> / Privacy </p>
                </div>
            </div>
            <div className={style.PrivacyContentContainer}>
                <h1 className={style.PrivacyContentContainer_mainText}> Privacy Policy:</h1>
                <p  className={style.PrivacyContentContainer_subTitle}>Protecting your privacy is important to us. This Privacy Policy outlines how we collect, use, and disclose personal information when you use our website.</p>
                <div className={style.PrivacyContentContainer_clauseContainer}>
                    <article className={style.PrivacyContentContainer_clauseContainer_article}>
                        <h1 className={style.PrivacyContentContainer_clauseContainer_article_clause}>1. Information We Collect:</h1>
                        <p className={style.PrivacyContentContainer_clauseContainer_article_clauseText}>We collect personal information such as your name, email address, and payment details when you create an account or make a purchase. We also collect usage data such as IP address, browser type, and pages visited.</p>
                    </article>
                    <article className={style.PrivacyContentContainer_clauseContainer_article}>
                        <h1 className={style.PrivacyContentContainer_clauseContainer_article_clause}>2. How We Use Your Information:</h1>
                        <p className={style.PrivacyContentContainer_clauseContainer_article_clauseText}>We use your personal information to provide and improve our services. Your information may also be used for communication purposes, such as sending newsletters or updates.</p>
                    </article>
                    <article className={style.PrivacyContentContainer_clauseContainer_article}>
                        <h1 className={style.PrivacyContentContainer_clauseContainer_article_clause}>3. Information Sharing:</h1>
                        <p className={style.PrivacyContentContainer_clauseContainer_article_clauseText}>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. We may share your information with trusted third-party service providers who assist us in operating our website.</p>
                    </article>
                    <article className={style.PrivacyContentContainer_clauseContainer_article}>
                        <h1 className={style.PrivacyContentContainer_clauseContainer_article_clause}>4. Security:</h1>
                        <p className={style.PrivacyContentContainer_clauseContainer_article_clauseText}>We implement security measures to protect your personal information against unauthorized access or alteration. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
                    </article>
                    <article className={style.PrivacyContentContainer_clauseContainer_article}>
                        <h1 className={style.PrivacyContentContainer_clauseContainer_article_clause}>5. Your Choices:</h1>
                        <p className={style.PrivacyContentContainer_clauseContainer_article_clauseText}>You have the right to access, update, or delete your personal information at any time. You can opt out of receiving promotional emails by following the instructions provided in the email. By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns, please contact us. 
                            <br />
                            By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns, please contact us.</p>
                    </article>
                </div>
            </div>
        </>
    )
}
export default PrivacyPolicePage;