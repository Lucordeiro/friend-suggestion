import { Relationship } from './../entities/relationship';

export interface RelationshipRepository{
    create(relationship:Relationship): Promise<void>
    hasOverlapping(relationship:Relationship):Promise<any>
}