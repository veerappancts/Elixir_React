from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import KnowledgeTestDetails, QuestionDetails, UpdateDetails, UserDetails, UserPktResponses, UserSentUpdatePkt, UserUpdateResponses
from .serializers import KnowledgeTestDetailSerializer, QuestionDetailsSerializer, UpdateDetailSerializer, UpdateResponsesSerializer, UserDetailSerializer, UserPktResponsesSerializer, UserSentUpdatePktSerializer


# Create your views here.
class UserDetailViewSet(ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailSerializer


class UpdateDetailViewSet(ModelViewSet):
    queryset = UpdateDetails.objects.all()
    serializer_class = UpdateDetailSerializer

class KnowledgeTestDetailViewSet(ModelViewSet):
    queryset = KnowledgeTestDetails.objects.all()
    serializer_class = KnowledgeTestDetailSerializer

class UserSentUpdatePktViewSet(ModelViewSet):
    queryset = UserSentUpdatePkt.objects.all()
    serializer_class = UserSentUpdatePktSerializer

class UpdateResponsesViewSet(ModelViewSet):
    # queryset = UserUpdateResponses.objects.all()
    serializer_class = UpdateResponsesSerializer
    def get_queryset(self):
        return super().get_queryset()

class PktResponsesViewSet(ModelViewSet):
    queryset = UserPktResponses.objects.all()
    serializer_class = UserPktResponsesSerializer

class QuestionDetailsViewSet(ModelViewSet):
    queryset = QuestionDetails.objects.all()
    serializer_class = QuestionDetailsSerializer
