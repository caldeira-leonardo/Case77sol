import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProposeData from './ProposeData';

const meta = {
    title: 'Components/ProposeData',
    component: ProposeData,
    tags: ['autodocs'],
    // decorators: [
    //     (Story) => {
    //         return <div style={{ backgroundColor: '#000', padding: '30px' }}>{Story()}</div>;
    //     },
    // ],
} satisfies Meta<typeof ProposeData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        irradiancia: 5354,
        irradiancia_minima: 4634,
        irradiancia_maxima: 5734,
        integradores_regiao: 33,
        integradores_minimo: 1,
        integradores_maximo: 652,
        economia: 29568,
        potencial: 'MARAVILHOSO',
        valor_instalacao: 7669.896430362434,
        parcelamento: [
            {
                parcelas: 1,
                taxa_minina: 0,
                taxa_maxima: 3.5,
                valor_minimo: 7669.896430362434,
                valor_maximo: 8436.886073398678,
            },
            {
                parcelas: 24,
                taxa_minina: 0.79,
                taxa_maxima: 3.5,
                valor_minimo: 352.0888187502704,
                valor_maximo: 477.626158521984,
            },
            {
                parcelas: 36,
                taxa_minina: 0.99,
                taxa_maxima: 3.5,
                valor_minimo: 254.31094468400593,
                valor_maximo: 378.00442420991567,
            },
            {
                parcelas: 48,
                taxa_minina: 0.99,
                taxa_maxima: 3.5,
                valor_minimo: 201.52618365011156,
                valor_maximo: 332.15604781515475,
            },
            {
                parcelas: 60,
                taxa_minina: 1.08,
                taxa_maxima: 3.5,
                valor_minimo: 174.35670210764184,
                valor_maximo: 307.47557356209575,
            },
        ],
        co2: 2.2643712,
        kit: [
            {
                id: '58706',
                qtde: 3,
                valor: 1566.91,
                valueTotal: 4700.7300000000005,
                url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/58706_16756990891962324934.png',
                titulo: 'Módulo solar',
                custo: 761.93,
            },
            {
                id: '35777',
                qtde: 1,
                valor: 1233.9,
                url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35777/imagens/1618952203.png',
                titulo: 'Estrutura para instalação',
                custo: 600,
                valueTotal: 4700.7300000000005,
            },
            {
                id: '56361',
                qtde: 1,
                valor: 2968.11,
                valueTotal: 2968.11,
                url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/56361_16545250361990237015.png',
                titulo: 'Inversor solar',
                custo: 1443.28,
            },
            {
                id: '56395',
                qtde: 1,
                valor: 0,
                url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/56395_1654722826466048738.png',
                titulo: 'Cabo Tronco',
                valueTotal: 2968.11,
                custo: 0,
            },
            {
                id: '56397',
                qtde: 1,
                valor: 0,
                url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/56397_16547229581599908632.jpg',
                titulo: 'End Cap',
                valueTotal: 2968.11,
                custo: 0,
            },
            {
                id: '35565',
                qtde: 25,
                valor: 11.82,
                url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/35565_1664477157188692101.jpg',
                titulo: 'Cabo solar C/C preto',
                custo: 5.75,
                valueTotal: 2968.11,
            },
            {
                id: '35566',
                qtde: 25,
                valor: 11.82,
                url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/35566_16644772551160078311.jpg',
                titulo: 'Cabo solar C/C vermelho',
                custo: 5.75,
                valueTotal: 2968.11,
            },
            {
                id: '35758',
                qtde: 2,
                valor: 14.4,
                url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35758/imagens/1618952428.jpeg',
                titulo: 'Par de conector MC4',
                custo: 7,
                valueTotal: 2968.11,
            },
        ],
        potencyCC: 1.5,
        performance: 64.24000000000002,
        qtdeInversores: 1,
        indiceUnico: 0.6563287581699346,
        potenciaSistema: 1.4935035331661726,
    },
};
