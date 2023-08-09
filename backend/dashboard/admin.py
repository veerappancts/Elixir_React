from django.contrib import admin
from django.contrib.auth.models import User
from .models import AccountDetails, KnowledgeTestDetails, QuestionDetails, UpdateDetails, UserDetails, UserPktResponses, UserSentUpdatePkt, UserUpdateResponses

# Register your models here.
# admin.site.register(User)
admin.site.register(UserDetails)
admin.site.register(AccountDetails)

# Update Details
admin.site.register(UpdateDetails)
admin.site.register(UserSentUpdatePkt)
admin.site.register(UserUpdateResponses)

# PKT Details
admin.site.register(KnowledgeTestDetails)
admin.site.register(UserPktResponses)

# Question Details
admin.site.register(QuestionDetails)