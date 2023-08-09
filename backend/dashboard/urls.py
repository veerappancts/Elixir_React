from django.urls import path, include
# from rest_framework.routers import DefaultRouter
from rest_framework_nested import routers

from . import views

router = routers.DefaultRouter()
router.register("users", views.UserDetailViewSet, basename="users")
router.register("updates", views.UpdateDetailViewSet, basename="updates")
router.register("knowledgetests", views.KnowledgeTestDetailViewSet, basename="knowledgetests")
router.register("sentupdatepkt", views.UserSentUpdatePktViewSet, basename="sentupdatepkt")
router.register("updateresponses", views.UpdateResponsesViewSet, basename="updateresponses")
router.register("pktresponses", views.PktResponsesViewSet, basename="pktresponses")
router.register("questiondetails", views.QuestionDetailsViewSet, basename="questiondetails")

urlpatterns = router.urls

# urlpatterns = [
#     path('users/', include(router.urls)),
# ]