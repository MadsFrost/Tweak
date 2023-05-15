
export type ElementType = "link";
export interface ElementOptionsProps {
    onPress: () => void;
    elementType: ElementType;
}

const ElementOption: React.FC<ElementOptionsProps> = ({ onPress, elementType }) => {
    return(
        <>
            <div onClick={onPress}>
                {elementType}
            </div>
        </>
    );
}

export default ElementOption;