type Props = {
  companyName: string;
};

export default function LogoBox({ companyName }: Props) {
  return (
    <div className="flex">
      <img src="/logo192.png" alt={companyName} width={100} height={100} />
      <p>{companyName}</p>
    </div>
  );
}
