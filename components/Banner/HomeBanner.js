import { Content } from "@components/Content";
import { MotionBTTContainer } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";

export const HomeBanner = (props) => {
    const { passdata } = props;
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer transition={{ delay: 0.5, duration: 0.5 }}>
                    <div className="items-center justify-center">
                        <PageTitle
                            className="text-center mx-auto mt-4"
                            type="heavy"
                        >
                            Full Stack Developer
                        </PageTitle>
                        <Content className="text-center" alignment="center">
                            <p>{ passdata }</p>
                        </Content>
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
