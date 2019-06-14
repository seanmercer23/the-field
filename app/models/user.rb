class User < ApplicationRecord
    has_secure_password
    has_many :videos, dependent: :nullify
    has_many :articles, dependent: :nullify
    validates :username, presence: true, uniqueness: true
    validates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }
end
