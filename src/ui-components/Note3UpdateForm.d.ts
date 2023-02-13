/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Note3 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Note3UpdateFormInputValues = {
    title?: string;
    text?: string;
};
export declare type Note3UpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Note3UpdateFormOverridesProps = {
    Note3UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Note3UpdateFormProps = React.PropsWithChildren<{
    overrides?: Note3UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    note3?: Note3;
    onSubmit?: (fields: Note3UpdateFormInputValues) => Note3UpdateFormInputValues;
    onSuccess?: (fields: Note3UpdateFormInputValues) => void;
    onError?: (fields: Note3UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Note3UpdateFormInputValues) => Note3UpdateFormInputValues;
    onValidate?: Note3UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Note3UpdateForm(props: Note3UpdateFormProps): React.ReactElement;
