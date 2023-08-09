from django.contrib.auth.models import User
from rest_framework import serializers
from .models import KnowledgeTestDetails, QuestionDetails, UpdateDetails, UserDetails, UserPktResponses, UserSentUpdatePkt, UserUpdateResponses


class UserDetailSerializer(serializers.ModelSerializer):
    # user = User
    class Meta:
        model = UserDetails
        fields = ['id', 'user', 'full_name', 'account_name']


class UpdateDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpdateDetails
        fields = ['id', 'title', 'sender_id', 'deadline', 'recepients', 'update_type', 'update_source', 'update_message', 'created_at']


class KnowledgeTestDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnowledgeTestDetails
        fields = ['id', 'title', 'sender_id', 'deadline', 'passing_score', 'max_attempts', 'recepients', 'questions', 'update_id', 'created_at']


class UserSentUpdatePktSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSentUpdatePkt
        fields = ['id', 'sender', 'update', 'pkt']

class UpdateResponsesSerializer(serializers.ModelSerializer):
    # user_id = serializers.PrimaryKeyRelatedField(many=True)
    class Meta:
        model = UserUpdateResponses
        fields = ['id', 'user_id', 'update_id', 'ack_status', 'ack_comments', 'timestamp']

class UserPktResponsesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPktResponses
        fields = ['id', 'user_id', 'pkt_id', 'attempt_number', 'user_answer', 'score', 'status', 'timestamp']

class QuestionDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionDetails
        fields = ['id', 'question', 'answer_options', 'correct_answer', 'mark', 'question_type', 'media_type', 'media_url', 'question_tag', 'creator', 'created_at']
