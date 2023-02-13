import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerNote3 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note3, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote3 = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note3, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note3 = LazyLoading extends LazyLoadingDisabled ? EagerNote3 : LazyNote3

export declare const Note3: (new (init: ModelInit<Note3>) => Note3) & {
  copyOf(source: Note3, mutator: (draft: MutableModel<Note3>) => MutableModel<Note3> | void): Note3;
}