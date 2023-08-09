from django.contrib.auth.models import User
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

class AccountDetails(models.Model):
    account_name = models.CharField(max_length=50)

    class Meta:
        db_table = "elxr_account_detail"

    def __str__(self) -> str:
        return self.account_name


class UserDetails(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    account_name = models.ForeignKey(AccountDetails, on_delete=models.SET_NULL, null=True)

    class Meta:
        db_table = "elxr_user_details"

    def __str__(self) -> str:
        return self.full_name
    

class UpdateDetails(models.Model):
    title = models.CharField(max_length=100)
    sender_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    deadline = models.DateTimeField()
    recepients = models.TextField()
    update_type = models.CharField(max_length = 50)
    update_source = models.CharField(max_length = 50)
    # update_message = RichTextUploadingField(blank=True, null=True)
    update_message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = "elxr_update_details"

    def __str__(self) -> str:
        return self.title


class UserUpdateResponses(models.Model):
    STATUS_CHOICES = (
        ('P', 'Pending'),
        ('C', 'Completed'),
    )

    timestamp = models.DateTimeField()
    update_id = models.ForeignKey(UpdateDetails, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.PROTECT)
    ack_status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='P')
    ack_comments = models.CharField(max_length=200, null=True)

    class Meta:
        db_table = "elxr_user_update_responses"


class KnowledgeTestDetails(models.Model):
    title = models.CharField(max_length=100)
    sender_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    deadline = models.DateTimeField()
    passing_score = models.DecimalField(max_digits=5, decimal_places=2)
    max_attempts = models.IntegerField()
    recepients = models.TextField()
    questions = models.TextField()
    update_id = models.ForeignKey(UpdateDetails, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "elxr_knowledge_test_details"


class QuestionDetails(models.Model):
    TYPE_CHOICES = (
        ('TOF', 'True Or False'),
        ('MCQ', 'Multiple Choice Question'),
        ('MAQ', 'Multiple Answer Question'),
        ('SUB', 'Subjective'),
    )
    # question = RichTextUploadingField(blank=True, null=True)
    question = models.TextField(blank=True, null=True)
    question_type = models.CharField(max_length = 3, choices=TYPE_CHOICES)
    mark = models.DecimalField(max_digits=5, decimal_places=2)
    media_type = models.CharField(max_length = 100, null=True)
    media_url = models.CharField(max_length = 200, null=True)
    answer_options = models.TextField()
    correct_answer = models.TextField()
    question_tag = models.CharField(max_length = 100, null=True)
    creator = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "elxr_question_details"


class UserSentUpdatePkt(models.Model):
    sender = models.ForeignKey(User, on_delete=models.SET_DEFAULT, default=1)
    update = models.ForeignKey(UpdateDetails, on_delete=models.CASCADE, null=True, blank=True)
    pkt = models.ForeignKey(KnowledgeTestDetails, on_delete=models.CASCADE, null=True, blank=True)

    class Meta:
        db_table = "elxr_sent_update_pkt"


class UserPktResponses(models.Model):
    STATUS_CHOICES = (
        ('P', 'Pass'),
        ('F', 'Fail'),
        ('N', 'NA')
    )

    user_id = models.ForeignKey(User, on_delete=models.PROTECT)
    attempt_number = models.PositiveIntegerField()
    user_answer = models.TextField()
    score = models.DecimalField(max_digits=5, decimal_places=2)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default='N')
    pkt_id = models.ForeignKey(KnowledgeTestDetails, on_delete=models.CASCADE)
    timestamp = models.DateTimeField()
    
    class Meta:
        db_table = "elxr_pkt_responses"
    




