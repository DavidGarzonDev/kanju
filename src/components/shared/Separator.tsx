interface Props {
    className?: string;
}

const Separator = ({ className }: Props) => {
    return (
        <div
            className={`w-full h-[1px] bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 my-4 ${className}`}
        />
    );
};

export default Separator;
