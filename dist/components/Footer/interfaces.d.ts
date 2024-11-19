export interface FooterProps {
    title: string;
    links: Record<string, string>;
    btnLabel: string;
    mainText: string;
    btnClick: () => void;
    email: string;
    address: string;
}
