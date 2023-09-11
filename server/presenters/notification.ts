import { Notification } from "@server/models";
import presentUser from "./user";
import { presentComment, presentDocument } from ".";

export default async function presentNotification(notification: Notification) {
  return {
    id: notification.id,
    viewedAt: notification.viewedAt,
    archivedAt: notification.archivedAt,
    createdAt: notification.createdAt,
    event: notification.event,
    userId: notification.userId,
    actorId: notification.actorId,
    actor: notification.actor ? presentUser(notification.actor) : undefined,
    commentId: notification.commentId,
    comment: notification.comment
      ? presentComment(notification.comment)
      : undefined,
    documentId: notification.documentId,
    document: notification.document
      ? await presentDocument(notification.document)
      : undefined,
    revisionId: notification.revisionId,
    collectionId: notification.collectionId,
  };
}
