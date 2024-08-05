import React from 'react';
import type { Merge } from '../types/utils';

type ButtonProps = Merge<React.ButtonHTMLAttributes<HTMLButtonElement>, {checked?: boolean}> 

export const RadioGroup = (
	{ onChange = () => {}, children, value, ...restProps }:
	
	Merge<React.HTMLProps<HTMLDivElement>,{ onChange?:(v: string) => void, value: string }>
) => {
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		const target = e.target as HTMLButtonElement
		if(target.value) {
			onChange(target.value)
		}
	}
	return (
		<div onClick={handleClick} {...restProps}>
			{React.Children.map(children, (child) => {
				if(React.isValidElement<ButtonProps>(child)) {
					const checked= value === child.props.value;
					return React.cloneElement(child, {
						checked,
					})
				}
				return child;
			})}
		</div>
	)
}
