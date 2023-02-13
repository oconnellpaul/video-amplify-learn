/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Note3CreateFormInputValues = {
    title?: string;
    text?: string;
};
export declare type Note3CreateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Note3CreateFormOverridesProps = {
    Note3CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Note3CreateFormProps = React.PropsWithChildren<{
    overrides?: Note3CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Note3CreateFormInputValues) => Note3CreateFormInputValues;
    onSuccess?: (fields: Note3CreateFormInputValues) => void;
    onError?: (fields: Note3CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Note3CreateFormInputValues) => Note3CreateFormInputValues;
    onValidate?: Note3CreateFormValidationValues;
} & React.CSSProperties>;
export default function Note3CreateForm(props: Note3CreateFormProps): React.ReactElement;
