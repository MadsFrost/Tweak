import React from 'react'
import { useAppSelector } from '../../hooks'
const Command = () => {
    const commandRef = React.createRef<HTMLInputElement>();
    const [command, setCommand] = React.useState("");
    const editorText = useAppSelector((state) => state.client.options.editor.style.text);

    const handleChangeCommand = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommand(event.currentTarget.value);
    }
    React.useEffect(() => {
        commandRef?.current?.focus();
    }, [commandRef])
    return (
        <div className='flex flex-row items-center text-md'>
                <p className='pr-2 font-bold -mt-1' style={{
                    color: editorText
                }}>
                {'>'}
                </p>
                <input 
                ref={commandRef} 
                className="focus:outline-none bg-transparent" 
                placeholder="123...." 
                value={command} 
                onChange={handleChangeCommand} 
                style={{
                    color: editorText
                }}
            />
        </div>
    )
}

export default Command