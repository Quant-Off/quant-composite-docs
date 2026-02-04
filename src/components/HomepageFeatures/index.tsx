import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

/**
 * 메인 페이지에 보이는 몇 가지의 피처 설명 항목들
 */
const FeatureList: FeatureItem[] = [
    {
        title: '퀀트 프로젝트',
        Svg: require('@site/static/img/quant.svg').default,
        description: (
            <>
                EntanglementLib, QRAME, Poseidon 등의 Quant 프로젝트의 작동 원리, 세부 개념을 직접
                배워볼 수 있습니다.
            </>
        ),
    },
    {
        title: '양자정보과학',
        Svg: require('@site/static/img/quantum_information.svg').default,
        description: (
            <>
                양자정보과학은 양자중첩과 얽힘을 활용해 고전 컴퓨터가 불가능한 초고속 연산과 절대 안전한 통신을
                실현하는 혁신적인 학문입니다. 선형대수로 양자 상태를 아름답게 표현하며, 미래 보안과 컴퓨팅의
                핵심 열쇠를 쥐고 있습니다.
            </>
        ),
    },
    {
        title: '정보보안',
        Svg: require('@site/static/img/security.svg').default,
        description: (
            <>
                정보보안은 디지털 세상의 방패입니다. 공격자의 교묘한 공격을 막고, 양자컴퓨터 시대에도 깨지지 않는
                암호를 설계하며, 당신의 소중한 데이터를 지키기 위한 여정을 소개합니다.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
